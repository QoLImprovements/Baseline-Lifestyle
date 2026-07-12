/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2709718",
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
      "gramsPerUnit": 525.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, pumpkin",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 6.86,
    "energy_kcal": 72.0,
    "fat_g": 4.7,
    "fibre_g": 1.5,
    "folate_ug": 12.0,
    "iron_mg": 0.74,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 27.0,
    "potassium_mg": 120.0,
    "protein_g": 1.1,
    "salt_g": 0.6025,
    "sat_fat_g": 2.53,
    "sodium_mg": 241.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 368.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709718",
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
