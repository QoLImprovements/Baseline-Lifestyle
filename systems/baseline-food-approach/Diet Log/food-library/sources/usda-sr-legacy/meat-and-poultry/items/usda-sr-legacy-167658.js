/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-varied-from-1-to-3-tacos-per-serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-167658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 281.0,
      "key": "serving-varied-from-1-to-3-tacos-per-serving",
      "kind": "unit",
      "label": "serving varied from 1 to 3 tacos per serving"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "taco",
      "kind": "unit",
      "label": "taco"
    },
    {
      "gramsPerUnit": 279.0,
      "key": "2-taco",
      "kind": "unit",
      "label": "2 taco"
    },
    {
      "gramsPerUnit": 389.0,
      "key": "3-taco",
      "kind": "unit",
      "label": "3 taco"
    }
  ],
  "name": "Restaurant, Mexican, soft taco with ground beef, cheese and lettuce",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 17.9,
    "energy_kcal": 917.0,
    "fat_g": 10.8,
    "fibre_g": 1.5,
    "folate_ug": 38.0,
    "iron_mg": 1.85,
    "magnesium_mg": 27.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 172.0,
    "potassium_mg": 244.0,
    "protein_g": 12.6,
    "salt_g": 1.2725,
    "sat_fat_g": 4.49,
    "sodium_mg": 509.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 49.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167658",
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
