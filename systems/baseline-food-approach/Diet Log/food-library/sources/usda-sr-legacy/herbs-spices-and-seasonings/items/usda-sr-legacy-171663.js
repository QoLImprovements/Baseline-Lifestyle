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
  "id": "usda-sr-legacy-171663",
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
  "name": "Cereals, QUAKER, Instant Oatmeal, apples and cinnamon, dry",
  "nutritionPerBasis": {
    "calcium_mg": 243.0,
    "carbs_g": 76.7,
    "energy_kcal": 366.0,
    "fat_g": 4.61,
    "fibre_g": 8.3,
    "folate_ug": 205.0,
    "iron_mg": 8.78,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 294.0,
    "potassium_mg": 327.0,
    "protein_g": 8.62,
    "salt_g": 1.135,
    "sat_fat_g": 0.88,
    "sodium_mg": 454.0,
    "sugar_g": 28.9,
    "vitamin_a_ug": 2450.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171663",
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
