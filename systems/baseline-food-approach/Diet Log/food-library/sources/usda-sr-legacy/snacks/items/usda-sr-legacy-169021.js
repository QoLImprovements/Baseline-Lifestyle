/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 261.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "CRACKER BARREL, onion rings, thick-cut",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 41.0,
    "energy_kcal": 1370.0,
    "fat_g": 16.0,
    "fibre_g": 2.2,
    "folate_ug": 14.0,
    "iron_mg": 0.73,
    "magnesium_mg": 21.0,
    "omega3_g": 0.916,
    "phosphorus_mg": 100.0,
    "potassium_mg": 141.0,
    "protein_g": 4.78,
    "salt_g": 1.1575,
    "sat_fat_g": 2.94,
    "sodium_mg": 463.0,
    "sugar_g": 4.82,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 36.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169021",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
