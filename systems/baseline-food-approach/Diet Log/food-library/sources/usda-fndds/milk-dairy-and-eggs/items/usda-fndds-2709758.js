/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2709758",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    }
  ],
  "name": "Soup, cream of tomato",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 6.39,
    "energy_kcal": 70.0,
    "fat_g": 4.68,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 0.6,
    "magnesium_mg": 10.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 27.0,
    "potassium_mg": 184.0,
    "protein_g": 1.21,
    "salt_g": 0.615,
    "sat_fat_g": 2.49,
    "sodium_mg": 246.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709758",
  "state": "Unspecified",
  "subcategory": "Soups, cream-based",
  "tags": [
    "milk-dairy-and-eggs",
    "soups-cream-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
