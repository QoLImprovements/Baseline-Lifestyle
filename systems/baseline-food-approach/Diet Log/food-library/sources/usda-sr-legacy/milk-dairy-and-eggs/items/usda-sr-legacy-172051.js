/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 641.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "PIZZA HUT 14\" Cheese Pizza, THIN 'N CRISPY Crust",
  "nutritionPerBasis": {
    "calcium_mg": 284.0,
    "carbs_g": 34.2,
    "energy_kcal": 1280.0,
    "fat_g": 12.8,
    "fibre_g": 2.4,
    "folate_ug": 96.0,
    "iron_mg": 2.52,
    "magnesium_mg": 24.0,
    "omega3_g": 0.253,
    "phosphorus_mg": 298.0,
    "potassium_mg": 197.0,
    "protein_g": 13.4,
    "salt_g": 2.1425,
    "sat_fat_g": 6.1,
    "sodium_mg": 857.0,
    "sugar_g": 3.13,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172051",
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
