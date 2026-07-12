/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "5-sprigs",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172233",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "5-sprigs",
      "kind": "unit",
      "label": "5 sprigs"
    },
    {
      "gramsPerUnit": 8.9,
      "key": "cup-sprigs",
      "kind": "unit",
      "label": "cup sprigs"
    }
  ],
  "name": "Dill weed, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 208.0,
    "carbs_g": 7.02,
    "energy_kcal": 180.0,
    "fat_g": 1.12,
    "fibre_g": 2.1,
    "folate_ug": 150.0,
    "iron_mg": 6.59,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 738.0,
    "protein_g": 3.46,
    "salt_g": 0.1525,
    "sat_fat_g": 0.06,
    "sodium_mg": 61.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 386.0,
    "vitamin_c_mg": 85.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172233",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
