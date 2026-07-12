/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-1-quesadilla",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 203.0,
      "key": "serving-1-quesadilla",
      "kind": "unit",
      "label": "serving 1 quesadilla"
    }
  ],
  "name": "ON THE BORDER, cheese quesadilla",
  "nutritionPerBasis": {
    "calcium_mg": 432.0,
    "carbs_g": 24.2,
    "energy_kcal": 1650.0,
    "fat_g": 25.5,
    "fibre_g": 2.2,
    "folate_ug": 55.0,
    "iron_mg": 1.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.213,
    "phosphorus_mg": 373.0,
    "potassium_mg": 95.0,
    "protein_g": 16.9,
    "salt_g": 1.6925,
    "sat_fat_g": 13.0,
    "sodium_mg": 677.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169034",
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
