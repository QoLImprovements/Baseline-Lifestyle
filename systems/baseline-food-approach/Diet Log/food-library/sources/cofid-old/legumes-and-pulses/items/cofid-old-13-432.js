/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "10 samples, 8 brands. Boiled 3-8 minutes",
  "id": "cofid-old-13-432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beans, green/French, frozen, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 4.7,
    "energy_kcal": 25.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 48.0,
    "iron_mg": 0.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 160.0,
    "protein_g": 1.7,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 7.8
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-432",
  "state": "Boiled",
  "subcategory": "DB",
  "tags": [
    "boiled",
    "db",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
