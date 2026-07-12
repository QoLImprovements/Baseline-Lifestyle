/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-serving-3-x-1-x-2",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-serving-3-x-1-x-2",
      "kind": "unit",
      "label": "1 serving (3\" x 1\" x 2\")"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meat loaf, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 10.7,
    "energy_kcal": 325.0,
    "fat_g": 22.0,
    "fibre_g": 0.6,
    "folate_ug": 28.0,
    "iron_mg": 2.28,
    "magnesium_mg": 18.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 155.0,
    "potassium_mg": 229.0,
    "protein_g": 19.8,
    "salt_g": 1.5725,
    "sat_fat_g": 6.37,
    "sodium_mg": 629.0,
    "sugar_g": 1.03,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706468",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
