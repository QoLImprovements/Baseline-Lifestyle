/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169835",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "T.G.I. FRIDAY'S, macaroni & cheese, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 17.4,
    "energy_kcal": 121.0,
    "fat_g": 3.45,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.53,
    "magnesium_mg": 14.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 131.0,
    "potassium_mg": 88.0,
    "protein_g": 5.03,
    "salt_g": 1.205,
    "sat_fat_g": 1.63,
    "sodium_mg": 482.0,
    "sugar_g": 1.65,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169835",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
