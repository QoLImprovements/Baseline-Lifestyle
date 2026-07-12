/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, dumplings, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 11.7,
    "energy_kcal": 127.0,
    "fat_g": 6.36,
    "fibre_g": 0.9,
    "folate_ug": 20.0,
    "iron_mg": 1.17,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 78.0,
    "potassium_mg": 106.0,
    "protein_g": 6.15,
    "salt_g": 0.765,
    "sat_fat_g": 1.45,
    "sodium_mg": 306.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706631",
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
