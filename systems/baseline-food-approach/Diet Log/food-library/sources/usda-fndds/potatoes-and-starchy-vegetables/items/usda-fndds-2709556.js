/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-individual-container",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2709556",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
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
    }
  ],
  "name": "Soup, potato",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 10.5,
    "energy_kcal": 90.0,
    "fat_g": 4.71,
    "fibre_g": 1.2,
    "folate_ug": 13.0,
    "iron_mg": 0.34,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 36.0,
    "potassium_mg": 227.0,
    "protein_g": 1.51,
    "salt_g": 0.6,
    "sat_fat_g": 2.48,
    "sodium_mg": 240.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709556",
  "state": "Unspecified",
  "subcategory": "Soups, cream-based",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "soups-cream-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
