/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 257.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, macaroni n' cheese plate, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 15.6,
    "energy_kcal": 192.0,
    "fat_g": 11.5,
    "fibre_g": 0.7,
    "folate_ug": 31.0,
    "iron_mg": 0.55,
    "magnesium_mg": 17.0,
    "omega3_g": 0.434,
    "phosphorus_mg": 202.0,
    "potassium_mg": 125.0,
    "protein_g": 6.46,
    "salt_g": 0.935,
    "sat_fat_g": 4.2,
    "sodium_mg": 374.0,
    "sugar_g": 2.83,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167671",
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
