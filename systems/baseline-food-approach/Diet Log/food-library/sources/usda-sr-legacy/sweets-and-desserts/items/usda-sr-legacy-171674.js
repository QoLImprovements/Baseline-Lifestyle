/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "3-tbsp-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "3-tbsp-1-nlea-serving",
      "kind": "unit",
      "label": "3 tbsp (1 NLEA serving)"
    }
  ],
  "name": "Cereals, MALT-O-MEAL, chocolate, dry",
  "nutritionPerBasis": {
    "calcium_mg": 375.0,
    "carbs_g": 79.6,
    "energy_kcal": 363.0,
    "fat_g": 0.82,
    "fibre_g": 2.8,
    "folate_ug": 1140.0,
    "iron_mg": 42.9,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 124.0,
    "potassium_mg": 245.0,
    "protein_g": 10.6,
    "salt_g": 0.025,
    "sat_fat_g": 0.31,
    "sodium_mg": 10.0,
    "sugar_g": 16.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171674",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
