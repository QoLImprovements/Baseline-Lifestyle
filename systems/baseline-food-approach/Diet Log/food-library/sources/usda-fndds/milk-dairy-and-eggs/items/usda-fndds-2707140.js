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
  "id": "usda-fndds-2707140",
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
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, bisque",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.9,
    "energy_kcal": 75.0,
    "fat_g": 4.81,
    "fibre_g": 0.9,
    "folate_ug": 14.0,
    "iron_mg": 0.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 38.0,
    "potassium_mg": 138.0,
    "protein_g": 2.28,
    "salt_g": 0.5975,
    "sat_fat_g": 2.53,
    "sodium_mg": 239.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707140",
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
