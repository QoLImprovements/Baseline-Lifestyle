/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cereals, farina, enriched, assorted brands including CREAM OF WHEAT, quick (1-3 minutes), dry",
  "nutritionPerBasis": {
    "calcium_mg": 711.0,
    "carbs_g": 73.2,
    "energy_kcal": 360.0,
    "fat_g": 1.41,
    "fibre_g": 4.2,
    "folate_ug": 121.0,
    "iron_mg": 33.4,
    "magnesium_mg": 45.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 252.0,
    "potassium_mg": 153.0,
    "protein_g": 11.6,
    "salt_g": 0.31,
    "sat_fat_g": 0.232,
    "sodium_mg": 124.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171658",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
