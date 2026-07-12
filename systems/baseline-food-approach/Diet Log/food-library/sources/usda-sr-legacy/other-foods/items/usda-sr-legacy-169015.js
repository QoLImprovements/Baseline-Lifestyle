/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169015",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, family style, fried mozzarella sticks",
  "nutritionPerBasis": {
    "calcium_mg": 334.0,
    "carbs_g": 25.1,
    "energy_kcal": 325.0,
    "fat_g": 18.3,
    "fibre_g": 2.0,
    "folate_ug": 26.0,
    "iron_mg": 0.62,
    "magnesium_mg": 21.0,
    "omega3_g": 0.548,
    "phosphorus_mg": 318.0,
    "potassium_mg": 108.0,
    "protein_g": 14.8,
    "salt_g": 2.1525,
    "sat_fat_g": 6.85,
    "sodium_mg": 861.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 22.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169015",
  "state": "Fried",
  "subcategory": "Restaurant Foods",
  "tags": [
    "fried",
    "other-foods",
    "restaurant-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
