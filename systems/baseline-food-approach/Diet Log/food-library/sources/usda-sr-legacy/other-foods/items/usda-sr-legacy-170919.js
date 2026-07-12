/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp-ground",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    }
  ],
  "name": "Spices, cardamom",
  "nutritionPerBasis": {
    "calcium_mg": 383.0,
    "carbs_g": 68.5,
    "energy_kcal": 311.0,
    "fat_g": 6.7,
    "fibre_g": 28.0,
    "folate_ug": 0.0,
    "iron_mg": 14.0,
    "magnesium_mg": 229.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 1120.0,
    "protein_g": 10.8,
    "salt_g": 0.045,
    "sat_fat_g": 0.68,
    "sodium_mg": 18.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170919",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "other-foods",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
