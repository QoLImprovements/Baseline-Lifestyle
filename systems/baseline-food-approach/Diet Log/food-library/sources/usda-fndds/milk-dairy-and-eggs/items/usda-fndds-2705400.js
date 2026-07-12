/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Milk, reduced fat",
  "id": "usda-fndds-2705400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "guideline-amount-per-cup-of-hot-cereal",
      "kind": "unit",
      "label": "Guideline amount per cup of hot cereal"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Milk, evaporated, reduced fat (2%)",
  "nutritionPerBasis": {
    "calcium_mg": 285.0,
    "carbs_g": 11.2,
    "energy_kcal": 92.0,
    "fat_g": 1.96,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.28,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 326.0,
    "protein_g": 7.42,
    "salt_g": 0.2825,
    "sat_fat_g": 1.21,
    "sodium_mg": 113.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705400",
  "state": "Unspecified",
  "subcategory": "Milk, reduced fat",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-reduced-fat",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
