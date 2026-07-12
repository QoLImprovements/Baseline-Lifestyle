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
  "id": "usda-sr-legacy-170730",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 399.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, DOUBLE WHOPPER, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 13.5,
    "energy_kcal": 1110.0,
    "fat_g": 17.1,
    "fibre_g": 1.6,
    "folate_ug": 27.0,
    "iron_mg": 5.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.392,
    "phosphorus_mg": 128.0,
    "potassium_mg": 189.0,
    "protein_g": 14.5,
    "salt_g": 0.9675,
    "sat_fat_g": 7.0,
    "sodium_mg": 387.0,
    "sugar_g": 3.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 11.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170730",
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
