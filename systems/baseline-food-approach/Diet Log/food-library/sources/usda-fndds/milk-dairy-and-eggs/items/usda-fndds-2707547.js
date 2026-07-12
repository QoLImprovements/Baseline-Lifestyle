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
  "id": "usda-fndds-2707547",
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
  "name": "Soup, peanut",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 8.36,
    "energy_kcal": 88.0,
    "fat_g": 5.29,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 0.41,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 243.0,
    "protein_g": 3.24,
    "salt_g": 0.615,
    "sat_fat_g": 1.06,
    "sodium_mg": 246.0,
    "sugar_g": 2.61,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707547",
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
