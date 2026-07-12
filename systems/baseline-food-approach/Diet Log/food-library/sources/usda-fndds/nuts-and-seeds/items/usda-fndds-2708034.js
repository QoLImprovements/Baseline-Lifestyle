/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-sopaipilla-1-1-2-x-1-1-2",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-sopaipilla-1-1-2-x-1-1-2",
      "kind": "unit",
      "label": "1 sopaipilla (1 1/2\" x 1 1/2\")"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.4,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Sopaipilla, without syrup or honey",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 41.5,
    "energy_kcal": 367.0,
    "fat_g": 20.2,
    "fibre_g": 1.4,
    "folate_ug": 55.0,
    "iron_mg": 3.16,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 73.0,
    "protein_g": 5.79,
    "salt_g": 2.245,
    "sat_fat_g": 4.93,
    "sodium_mg": 898.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708034",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
