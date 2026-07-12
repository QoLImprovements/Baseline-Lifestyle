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
  "id": "usda-sr-legacy-172991",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Raisin and Spice, dry",
  "nutritionPerBasis": {
    "calcium_mg": 235.0,
    "carbs_g": 75.7,
    "energy_kcal": 360.0,
    "fat_g": 4.0,
    "fibre_g": 5.8,
    "folate_ug": 213.0,
    "iron_mg": 9.1,
    "magnesium_mg": 82.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 292.0,
    "potassium_mg": 360.0,
    "protein_g": 9.11,
    "salt_g": 1.1,
    "sat_fat_g": 0.605,
    "sodium_mg": 440.0,
    "sugar_g": 35.6,
    "vitamin_a_ug": 494.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172991",
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
