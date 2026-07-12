/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171682",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Cinnamon Swirl, high fiber",
  "nutritionPerBasis": {
    "calcium_mg": 278.0,
    "carbs_g": 75.7,
    "energy_kcal": 366.0,
    "fat_g": 4.8,
    "fibre_g": 22.3,
    "folate_ug": 249.0,
    "iron_mg": 9.41,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 306.0,
    "potassium_mg": 256.0,
    "protein_g": 8.79,
    "salt_g": 1.1825,
    "sat_fat_g": 0.926,
    "sodium_mg": 473.0,
    "sugar_g": 14.7,
    "vitamin_a_ug": 3110.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171682",
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
