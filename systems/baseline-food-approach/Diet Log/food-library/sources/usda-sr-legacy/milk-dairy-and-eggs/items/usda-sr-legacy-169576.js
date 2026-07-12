/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "10-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Candies, milk chocolate coated raisins",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 68.4,
    "energy_kcal": 390.0,
    "fat_g": 14.8,
    "fibre_g": 3.1,
    "folate_ug": 8.0,
    "iron_mg": 1.71,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 514.0,
    "protein_g": 4.1,
    "salt_g": 0.09,
    "sat_fat_g": 10.3,
    "sodium_mg": 36.0,
    "sugar_g": 62.2,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169576",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
