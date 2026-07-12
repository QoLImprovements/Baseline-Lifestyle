/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Kellogg's Fruit 'n Fibre and own brand",
  "id": "cofid-current-11-779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, fruit and fibre type, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 70.3,
    "energy_kcal": 348.0,
    "fat_g": 5.8,
    "fibre_g": 8.6,
    "folate_ug": 210.0,
    "iron_mg": 10.9,
    "magnesium_mg": 71.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 209.0,
    "potassium_mg": 444.0,
    "protein_g": 8.0,
    "salt_g": 0.875,
    "sat_fat_g": 2.65,
    "sodium_mg": 350.0,
    "sugar_g": 26.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.36,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-779",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
