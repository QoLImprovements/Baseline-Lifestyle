/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup-1-serving",
      "kind": "unit",
      "label": "cup (1 serving)"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, regular (10 minute), cooked with water, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 10.5,
    "energy_kcal": 208.0,
    "fat_g": 0.21,
    "fibre_g": 0.5,
    "folate_ug": 12.0,
    "iron_mg": 3.74,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 16.0,
    "protein_g": 1.44,
    "salt_g": 0.015,
    "sat_fat_g": 0.033,
    "sodium_mg": 6.0,
    "sugar_g": 0.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171657",
  "state": "Cooked",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "cooked",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
