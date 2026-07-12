/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sandwich",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Fast foods, english muffin, with egg, cheese, and canadian bacon",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 21.7,
    "energy_kcal": 955.0,
    "fat_g": 9.66,
    "fibre_g": 0.4,
    "folate_ug": 71.0,
    "iron_mg": 2.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.143,
    "phosphorus_mg": 200.0,
    "potassium_mg": 173.0,
    "protein_g": 13.6,
    "salt_g": 1.5425,
    "sat_fat_g": 3.59,
    "sodium_mg": 617.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172033",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
