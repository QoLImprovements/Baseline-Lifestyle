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
  "id": "usda-fndds-2706634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ham or pork, noodles and vegetables excluding carrots, broccoli, and dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.3,
    "energy_kcal": 151.0,
    "fat_g": 4.91,
    "fibre_g": 1.4,
    "folate_ug": 58.0,
    "iron_mg": 1.23,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 147.0,
    "protein_g": 8.42,
    "salt_g": 0.7825,
    "sat_fat_g": 1.15,
    "sodium_mg": 313.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706634",
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
