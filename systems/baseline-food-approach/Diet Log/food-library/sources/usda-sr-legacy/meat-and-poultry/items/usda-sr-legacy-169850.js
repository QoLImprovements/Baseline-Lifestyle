/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 457.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Italian, lasagna with meat",
  "nutritionPerBasis": {
    "calcium_mg": 197.0,
    "carbs_g": 11.4,
    "energy_kcal": 185.0,
    "fat_g": 10.7,
    "fibre_g": 1.5,
    "folate_ug": 26.0,
    "iron_mg": 0.79,
    "magnesium_mg": 22.0,
    "omega3_g": 0.064,
    "phosphorus_mg": 178.0,
    "potassium_mg": 255.0,
    "protein_g": 10.8,
    "salt_g": 1.165,
    "sat_fat_g": 4.94,
    "sodium_mg": 466.0,
    "sugar_g": 3.15,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169850",
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
