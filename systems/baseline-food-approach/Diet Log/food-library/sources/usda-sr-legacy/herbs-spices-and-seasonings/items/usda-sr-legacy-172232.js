/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "2-tbsp-chopped",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.3,
      "key": "2-tbsp-chopped",
      "kind": "unit",
      "label": "2 tbsp, chopped"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "5-leaves",
      "kind": "unit",
      "label": "5 leaves"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "0-25-cup-leaves-whole",
      "kind": "unit",
      "label": "0.25 cup leaves, whole"
    }
  ],
  "name": "Basil, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 177.0,
    "carbs_g": 2.65,
    "energy_kcal": 23.0,
    "fat_g": 0.64,
    "fibre_g": 1.6,
    "folate_ug": 68.0,
    "iron_mg": 3.17,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 295.0,
    "protein_g": 3.15,
    "salt_g": 0.01,
    "sat_fat_g": 0.041,
    "sodium_mg": 4.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 415.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172232",
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
