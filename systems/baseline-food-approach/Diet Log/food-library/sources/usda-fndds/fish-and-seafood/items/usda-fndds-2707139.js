/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-can",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2707139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
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
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Soup, New England clam chowder",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 9.25,
    "energy_kcal": 93.0,
    "fat_g": 4.8,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 0.48,
    "magnesium_mg": 13.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 49.0,
    "potassium_mg": 185.0,
    "protein_g": 3.12,
    "salt_g": 0.6175,
    "sat_fat_g": 2.51,
    "sodium_mg": 247.0,
    "sugar_g": 0.95,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707139",
  "state": "Unspecified",
  "subcategory": "Soups, cream-based",
  "tags": [
    "fish-and-seafood",
    "soups-cream-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
