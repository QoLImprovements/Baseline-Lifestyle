/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Restaurant, Chinese, egg rolls, assorted",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 27.3,
    "energy_kcal": 1040.0,
    "fat_g": 11.9,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 1.41,
    "magnesium_mg": 18.0,
    "omega3_g": 0.636,
    "phosphorus_mg": 85.0,
    "potassium_mg": 165.0,
    "protein_g": 8.28,
    "salt_g": 1.17,
    "sat_fat_g": 2.12,
    "sodium_mg": 468.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 58.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167667",
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
