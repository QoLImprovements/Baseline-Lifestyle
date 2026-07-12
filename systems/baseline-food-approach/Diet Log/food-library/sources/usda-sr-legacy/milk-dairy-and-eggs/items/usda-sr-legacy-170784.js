/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "WENDY'S, Double Stack, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 15.4,
    "energy_kcal": 285.0,
    "fat_g": 16.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.75,
    "magnesium_mg": 21.0,
    "omega3_g": 0.106,
    "phosphorus_mg": 157.0,
    "potassium_mg": 258.0,
    "protein_g": 18.5,
    "salt_g": 1.1925,
    "sat_fat_g": 6.85,
    "sodium_mg": 477.0,
    "sugar_g": 3.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170784",
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
