/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "serving-3-pieces",
      "kind": "unit",
      "label": "serving (3 pieces)"
    }
  ],
  "name": "APPLEBEE'S, chicken tenders, from kids' menu",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 18.4,
    "energy_kcal": 1240.0,
    "fat_g": 16.2,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.868,
    "phosphorus_mg": 305.0,
    "potassium_mg": 337.0,
    "protein_g": 19.2,
    "salt_g": 1.9075,
    "sat_fat_g": 2.85,
    "sodium_mg": 763.0,
    "sugar_g": 0.39,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.28,
    "vitamin_k_ug": 25.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169012",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "meat-and-poultry",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
