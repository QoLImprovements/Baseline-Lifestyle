/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Whopper Jr with cheese (Burger King)",
  "nutritionPerBasis": {
    "calcium_mg": 175.0,
    "carbs_g": 19.0,
    "energy_kcal": 235.0,
    "fat_g": 12.1,
    "fibre_g": 0.9,
    "folate_ug": 42.0,
    "iron_mg": 1.87,
    "magnesium_mg": 19.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 161.0,
    "potassium_mg": 191.0,
    "protein_g": 12.0,
    "salt_g": 1.0175,
    "sat_fat_g": 4.91,
    "sodium_mg": 407.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 8.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706891",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
