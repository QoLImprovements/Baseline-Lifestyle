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
  "id": "usda-sr-legacy-173016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, Cinnamon Spice, reduced sugar",
  "nutritionPerBasis": {
    "calcium_mg": 313.0,
    "carbs_g": 69.4,
    "energy_kcal": 1500.0,
    "fat_g": 6.11,
    "fibre_g": 8.8,
    "folate_ug": 273.0,
    "iron_mg": 12.0,
    "magnesium_mg": 116.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 391.0,
    "potassium_mg": 329.0,
    "protein_g": 11.3,
    "salt_g": 1.9,
    "sat_fat_g": 1.16,
    "sodium_mg": 760.0,
    "sugar_g": 11.9,
    "vitamin_a_ug": 3410.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173016",
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
