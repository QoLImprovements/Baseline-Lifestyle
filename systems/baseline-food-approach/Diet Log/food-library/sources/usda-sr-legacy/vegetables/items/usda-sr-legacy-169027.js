/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, onion rings",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 40.7,
    "energy_kcal": 1490.0,
    "fat_g": 19.3,
    "fibre_g": 2.6,
    "folate_ug": 14.0,
    "iron_mg": 0.71,
    "magnesium_mg": 19.0,
    "omega3_g": 1.08,
    "phosphorus_mg": 94.0,
    "potassium_mg": 142.0,
    "protein_g": 4.89,
    "salt_g": 1.73,
    "sat_fat_g": 3.42,
    "sodium_mg": 692.0,
    "sugar_g": 4.68,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 42.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169027",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "restaurant-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
