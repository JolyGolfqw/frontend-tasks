/**
 * Your task is to create a key part of a hierarchical filter plugin. 
 * This component should dynamically transform incoming flat data into a hierarchical tree structure, 
 * excluding any keys or entries that contain null values. 
 * The structure should be dynamically determined based on the keys in the data, not hard-coded.
 * 
 * Requirements:
 * - The structure of the hierarchy must be determined dynamically based on the keys present in the incoming data.
 * - Do not hard-code specific keys (e.g., Category or Подкатегория) in your solution.
 * - Exclude any entries with null values from the hierarchy.
 * - Use the treeRoot object as the root node of the hierarchy. All other data should nest within this root node.
 * - Use the <Tree /> component from the Ant Design (antd) library to display the transformed tree structure.
 * - Enable interactivity by setting the checkable property.
 * - The example of incoming data (example of database response) is provided in the data.js file. 
 *   Use it example to test your component.
 * 
 * Implementation:
 * - Create a project on CodeSandbox, CodePen, or StackBlitz for this task.
 */


// SOLUTION
https://codesandbox.io/p/sandbox/k8y5qm

const tree = [/* your tree */]; 

const treeRoot = {
	checkable: true,
	disabled: false,
	disableCheckbox: false,
	level: null,
	key: 'tree_root',
	eventKey: 'tree_root',
	value: 'All categories',
	title: 'All categories',
	selectable: true,
	checked: false,
	children: tree,
};