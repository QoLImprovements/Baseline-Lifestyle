/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "packet",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, oats, instant, fortified, with cinnamon and spice, dry",
  "nutritionPerBasis": {
    "calcium_mg": 234.0,
    "carbs_g": 76.1,
    "energy_kcal": 369.0,
    "fat_g": 4.84,
    "fibre_g": 8.0,
    "folate_ug": 191.0,
    "iron_mg": 8.46,
    "magnesium_mg": 92.0,
    "omega3_g": 0.054,
    "phosphorus_mg": 322.0,
    "potassium_mg": 284.0,
    "protein_g": 9.53,
    "salt_g": 1.085,
    "sat_fat_g": 0.768,
    "sodium_mg": 434.0,
    "sugar_g": 25.3,
    "vitamin_a_ug": 440.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171664",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
