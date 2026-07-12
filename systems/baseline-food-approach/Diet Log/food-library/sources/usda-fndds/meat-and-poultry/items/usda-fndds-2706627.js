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
  "id": "usda-fndds-2706627",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 16.1,
    "energy_kcal": 135.0,
    "fat_g": 5.18,
    "fibre_g": 0.7,
    "folate_ug": 33.0,
    "iron_mg": 0.99,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 59.0,
    "potassium_mg": 95.0,
    "protein_g": 5.8,
    "salt_g": 0.785,
    "sat_fat_g": 1.08,
    "sodium_mg": 314.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706627",
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
