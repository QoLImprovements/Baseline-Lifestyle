/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Soup, lentil, canned",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.22,
    "energy_kcal": 43.0,
    "fat_g": 0.64,
    "fibre_g": 2.5,
    "folate_ug": 51.0,
    "iron_mg": 0.86,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 148.0,
    "protein_g": 2.48,
    "salt_g": 0.66,
    "sat_fat_g": 0.09,
    "sodium_mg": 264.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 52.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707460",
  "state": "Canned",
  "subcategory": "Soups, broth-based",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "soups-broth-based"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
