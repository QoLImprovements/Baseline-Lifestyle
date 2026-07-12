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
  "id": "usda-sr-legacy-170322",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "WENDY'S, CLASSIC SINGLE Hamburger, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 14.2,
    "energy_kcal": 221.0,
    "fat_g": 11.6,
    "fibre_g": 1.4,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.161,
    "phosphorus_mg": 126.0,
    "potassium_mg": 187.0,
    "protein_g": 14.9,
    "salt_g": 1.19,
    "sat_fat_g": 5.19,
    "sodium_mg": 476.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170322",
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
