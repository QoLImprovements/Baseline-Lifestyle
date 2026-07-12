/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-roll",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706621",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-roll",
      "kind": "unit",
      "label": "1 roll"
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
  "name": "Stuffed grape leaves with beef and rice",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 11.3,
    "energy_kcal": 228.0,
    "fat_g": 17.0,
    "fibre_g": 3.1,
    "folate_ug": 31.0,
    "iron_mg": 1.91,
    "magnesium_mg": 36.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 95.0,
    "potassium_mg": 225.0,
    "protein_g": 8.15,
    "salt_g": 1.05,
    "sat_fat_g": 3.66,
    "sodium_mg": 420.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 337.0,
    "vitamin_c_mg": 9.7,
    "vitamin_e_mg": 2.99,
    "vitamin_k_ug": 66.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706621",
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
