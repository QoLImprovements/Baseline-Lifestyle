/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706382",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef stroganoff",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 6.21,
    "energy_kcal": 150.0,
    "fat_g": 9.33,
    "fibre_g": 0.7,
    "folate_ug": 11.0,
    "iron_mg": 0.94,
    "magnesium_mg": 15.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 119.0,
    "potassium_mg": 210.0,
    "protein_g": 10.1,
    "salt_g": 1.145,
    "sat_fat_g": 3.44,
    "sodium_mg": 458.0,
    "sugar_g": 1.36,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706382",
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
