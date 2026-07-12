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
  "id": "usda-sr-legacy-169013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "T.G.I. FRIDAY'S, chicken fingers, from kids' menu",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 17.7,
    "energy_kcal": 1380.0,
    "fat_g": 20.8,
    "fibre_g": 0.9,
    "folate_ug": 0.0,
    "iron_mg": 0.79,
    "magnesium_mg": 28.0,
    "omega3_g": 1.201,
    "phosphorus_mg": 338.0,
    "potassium_mg": 300.0,
    "protein_g": 18.1,
    "salt_g": 1.98,
    "sat_fat_g": 3.92,
    "sodium_mg": 792.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 25.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169013",
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
