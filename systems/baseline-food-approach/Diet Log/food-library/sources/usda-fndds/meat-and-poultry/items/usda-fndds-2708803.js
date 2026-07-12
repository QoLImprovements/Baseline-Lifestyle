/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lo mein, with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 16.2,
    "energy_kcal": 130.0,
    "fat_g": 3.15,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 1.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 140.0,
    "protein_g": 9.15,
    "salt_g": 1.0325,
    "sat_fat_g": 0.686,
    "sodium_mg": 413.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708803",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
