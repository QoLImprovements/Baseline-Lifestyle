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
  "id": "usda-sr-legacy-167660",
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
  "name": "Restaurant, Latino, empanadas, beef, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 31.2,
    "energy_kcal": 335.0,
    "fat_g": 18.4,
    "fibre_g": 2.0,
    "folate_ug": 45.0,
    "iron_mg": 2.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.313,
    "phosphorus_mg": 103.0,
    "potassium_mg": 190.0,
    "protein_g": 11.3,
    "salt_g": 1.1,
    "sat_fat_g": 5.16,
    "sodium_mg": 440.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167660",
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
