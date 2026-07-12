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
  "id": "usda-sr-legacy-169834",
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
      "gramsPerUnit": 212.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "T.G.I. FRIDAY'S, fried mozzarella",
  "nutritionPerBasis": {
    "calcium_mg": 351.0,
    "carbs_g": 25.3,
    "energy_kcal": 1400.0,
    "fat_g": 18.8,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 0.59,
    "magnesium_mg": 23.0,
    "omega3_g": 0.595,
    "phosphorus_mg": 290.0,
    "potassium_mg": 97.0,
    "protein_g": 15.8,
    "salt_g": 1.845,
    "sat_fat_g": 7.17,
    "sodium_mg": 738.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169834",
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
