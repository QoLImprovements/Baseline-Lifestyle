/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, cream-based",
  "id": "usda-fndds-2707126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, pepperpot",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 6.79,
    "energy_kcal": 91.0,
    "fat_g": 5.75,
    "fibre_g": 0.9,
    "folate_ug": 15.0,
    "iron_mg": 0.43,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 41.0,
    "potassium_mg": 155.0,
    "protein_g": 3.06,
    "salt_g": 0.6275,
    "sat_fat_g": 2.88,
    "sodium_mg": 251.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707126",
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
