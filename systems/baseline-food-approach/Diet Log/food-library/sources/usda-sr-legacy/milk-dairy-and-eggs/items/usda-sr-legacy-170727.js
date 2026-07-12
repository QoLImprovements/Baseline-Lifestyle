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
  "id": "usda-sr-legacy-170727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 291.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "BURGER KING, WHOPPER, no cheese",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 18.6,
    "energy_kcal": 233.0,
    "fat_g": 12.8,
    "fibre_g": 1.8,
    "folate_ug": 47.0,
    "iron_mg": 4.37,
    "magnesium_mg": 18.0,
    "omega3_g": 0.275,
    "phosphorus_mg": 90.0,
    "potassium_mg": 169.0,
    "protein_g": 10.7,
    "salt_g": 0.7825,
    "sat_fat_g": 4.25,
    "sodium_mg": 313.0,
    "sugar_g": 4.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 19.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170727",
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
