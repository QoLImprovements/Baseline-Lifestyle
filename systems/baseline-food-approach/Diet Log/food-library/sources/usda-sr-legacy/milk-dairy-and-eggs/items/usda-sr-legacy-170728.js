/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 316.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, WHOPPER, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 16.7,
    "energy_kcal": 1040.0,
    "fat_g": 15.3,
    "fibre_g": 1.0,
    "folate_ug": 51.0,
    "iron_mg": 2.0,
    "magnesium_mg": 18.0,
    "omega3_g": 0.469,
    "phosphorus_mg": 113.0,
    "potassium_mg": 169.0,
    "protein_g": 11.2,
    "salt_g": 1.1325,
    "sat_fat_g": 5.78,
    "sodium_mg": 453.0,
    "sugar_g": 4.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 19.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170728",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
